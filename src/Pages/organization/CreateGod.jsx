import React from 'react'
import TextInput from '../../components/FormComponents/TextInput'
import Description from '../../components/FormComponents/Description'
import DatePickerInput from '../../components/FormComponents/DatePicker'
import styleCss from '../authPages/signin.module.css'
import ImageUpload from '../../components/FormComponents/ImageUpload'


export const CreateGod = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      
      <form action="" className="w-full" mt-12>
        <div className="flex flex-col md:flex-row gap-20 mb-16">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-8 mt-12">
            <TextInput label="First Name" placeholderLabel="Type First Name..." Error="" />
            <TextInput label="Last Name" placeholderLabel="Type Last Name..." Error="" />
            <TextInput label="Name" placeholderLabel="Type Name..." Error="" />
            <TextInput label="Contact-Email" placeholderLabel="Type Contact Email..." Error="" />
            <TextInput label="Contact-Phone" placeholderLabel="Type Contact Phone..." Error="" />
            <Description label="Address" placeholderLabel="Address..." Error="" />
            <DatePickerInput label="DOB" placeholderLabel="Type Date Of Birth..." Error="" />
            <DatePickerInput label="Date" placeholderLabel="Select Date..." Error="" />
          </div>
          
          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-10 mt-12">
            <TextInput label="Password" placeholderLabel="Type Password..." Error="" />
            <ImageUpload label="PrfilePic" placeholderLabel="choose image..." Error="" />
            <Description label="Description" placeholderLabel="Type Description..." Error="" />
          </div>
        </div>
        
        {/* Submit button - centered below both columns */}
        <div className="flex justify-center mt-8" style={{marginTop:"20px"}}>
          <button className="rounded-lg uppercase font-bold " id={styleCss.btnsignin}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateGod;