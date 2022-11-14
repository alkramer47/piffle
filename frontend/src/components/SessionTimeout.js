import React, {
    useState,
    useEffect,
    useCallback,
    useRef,
    Fragment,
    useAuth
  } from 'react';
  
  const SessionTimeout = () => {
    const [events, setEvents] = useState(['click', 'load', 'scroll']);
    const [second, setSecond] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const {
      authState: { isAuthenticated },
      logout,
    } = useAuth();
  
    let timeStamp;
    let warningInactiveInterval = useRef();
    let startTimerInterval = useRef();
  
    // start inactive check
    let timeChecker = () => {
      startTimerInterval.current = setTimeout(() => {
        let storedTimeStamp = sessionStorage.getItem('lastTimeStamp');
        warningInactive(storedTimeStamp);
      }, 60000);
    };
  
    // warning timer
    let warningInactive = (timeString) => {
      clearTimeout(startTimerInterval.current);
  
      warningInactiveInterval.current = setInterval(() => {
        const maxTime = 2;
        const popTime = 1;
  
        const diff = Date.now() - Date(timeString);
        const minPast = diff.getMinutes();
        const leftSecond = 60 - diff.getSeconds();
  
        if (minPast === popTime) {
          setSecond(leftSecond);
          setOpen(true);
        }
  
        if (minPast === maxTime) {
          clearInterval(warningInactiveInterval.current);
          setOpen(false);
          sessionStorage.removeItem('lastTimeStamp');
          logout();
        }
      }, 1000);
    };
  
    // reset interval timer
    let resetTimer = useCallback(() => {
      clearTimeout(startTimerInterval.current);
      clearInterval(warningInactiveInterval.current);
  
      if (isAuthenticated) {
        timeStamp = Date.now();
        sessionStorage.setItem('lastTimeStamp', timeStamp);
      } else {
        clearInterval(warningInactiveInterval.current);
        sessionStorage.removeItem('lastTimeStamp');
      }
      timeChecker();
      setOpen(false);
    }, [isAuthenticated]);
  
    // handle close popup
    const handleClose = () => {
      setOpen(false);
  
      resetTimer();
    };
  
    useEffect(() => {
      events.forEach((event) => {
        window.addEventListener(event, resetTimer);
      });
  
      timeChecker();
  
      return () => {
        clearTimeout(startTimerInterval.current);
        //   resetTimer();
      };
    }, [resetTimer, events, timeChecker]);
  
    console.log(second);
  
    if (!isOpen) {
      return null;
    }
  
    // change fragment to modal and handleclose func to close
    return <Fragment />;
  };
  
  export default SessionTimeout;