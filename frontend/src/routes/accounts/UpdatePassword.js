import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    
    return (
        <div>
            <form>
      <label>Enter new password:
        <input type="text" />
      </label>
    </form>
        </div>
    );
}

export default UpdatePassword;