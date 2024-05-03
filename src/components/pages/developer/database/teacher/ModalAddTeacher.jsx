import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'

const ModalAddTeacher = () => {
  return (
  
    <ModalWrapper>

        <div className="main-modal w-[300px] bg-secondary text-content h-full">
            <div className="modal-header p-4 realtive">
                <h2>New Student</h2>
                <button className='absolute top-[25px] right-4'><LiaTimesSolid/></button>
                </div>
            <div className="modal-body p-4">
                <form action="" className='flex flex-col justify-between h-[calc(100vh-110px)]'>
                    <div className='grow overflow-y-auto'>
                    <div className="input-wrap">
                        <label htmlFor="">Name</label>
                        <input type="text" />
                        <small className='error-msg'>Required*</small>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="">Name</label>
                        <input type="text" />
                        <small className='error-msg'>Required*</small>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="">Class</label>
                        <input type="text" />
                        <small className='error-msg'>Required*</small>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="">Gender</label>
                       <select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                       </select>
                        <small className='error-msg'>Required*</small>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="">Age</label>
                        <input min="1" max="99" type="number" />
                        <small className='error-msg'>Required*</small>
                    </div>
                    </div>

                    <div className="form-action flex">
                        <button className='btn btn--accent btn-form '>Add<SpinnerButton/></button>
                        <button className='btn btn-disable'>Cancel</button>
                    </div>
                </form>
                </div>
        </div>
    </ModalWrapper>
  
  )
}

export default ModalAddTeacher