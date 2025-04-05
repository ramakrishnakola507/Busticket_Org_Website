import React, { useState } from 'react';
import TextInput from '../../components/FormComponents/TextInput';
import Description from '../../components/FormComponents/Description';
import styleCss from '../authPages/signin.module.css';
import { useCreateOrganization } from '../../controller/organisationController';
import Swal from 'sweetalert2';

export const CreateOrganization = () => {
  const [orgname, setOrgname] = useState("");
  const [orgmail, setOrgmail] = useState("");
  const [orgphone, setOrgphone] = useState("");
  const [orgadres, setOrgadres] = useState("");
  const [orgdes, setOrgdes] = useState("");

  const createOrganizationMutation = useCreateOrganization();

  const validateFields = () => {
    if (!orgname.trim()) {
      Swal.fire({ icon: "error", title: "Missing Organisation Name", text: "Please enter the organisation name." });
      return false;
    } else if (!/^[A-Za-z\s]+$/.test(orgname)) {
      Swal.fire({ icon: "error", title: "Invalid Organisation Name", text: "Only alphabets and spaces are allowed." });
      return false;
    }

    if (!orgmail.trim()) {
      Swal.fire({ icon: "error", title: "Missing Email", text: "Please enter an email address." });
      return false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(orgmail)) {
      Swal.fire({ icon: "error", title: "Invalid Email", text: "Please enter a valid email (e.g., example@domain.com)." });
      return false;
    }

    if (!orgphone.trim()) {
      Swal.fire({ icon: "error", title: "Missing Phone Number", text: "Please enter a contact phone number." });
      return false;
    } else if (!/^\d{10}$/.test(orgphone)) {
      Swal.fire({ icon: "error", title: "Invalid Phone Number", text: "Phone number must be exactly 10 digits." });
      return false;
    }

    if (!orgadres.trim()) {
      Swal.fire({ icon: "error", title: "Missing Address", text: "Please provide an address." });
      return false;
    }

    if (!orgdes.trim()) {
      Swal.fire({ icon: "error", title: "Missing Description", text: "Please provide a description." });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    const orgdata = {
      organisationname: orgname,
      organisationemail: orgmail,
      organisationphone: orgphone,
      organisationaddress: orgadres,
      organisationdescription: orgdes,
    };

    try {
      await createOrganizationMutation.mutateAsync(orgdata);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Organisation created successfully!",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
      setOrgname("");
      setOrgmail("");
      setOrgphone("");
      setOrgadres("");
      setOrgdes("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: error.response?.data?.message || "Something went wrong!",
      });
    }
  };

  return (
    <div>
      <form className='flex flex-col gap-8 items-center justify-center' onSubmit={handleSubmit}>
        <TextInput label="Organisation Name" placeholderLabel="Type Organisation Name..." value={orgname} onChange={(e) => setOrgname(e.target.value)} />
        <TextInput label="Contact Email" placeholderLabel="Type Contact Email..." value={orgmail} onChange={(e) => setOrgmail(e.target.value)} />
        <TextInput label="Contact Phone" type="number" placeholderLabel="Type Contact Phone..." value={orgphone} onChange={(e) => setOrgphone(e.target.value)} />
        <Description label="Address" placeholderLabel="Address..." value={orgadres} onChange={(e) => setOrgadres(e.target.value)} />
        <Description label="Description" placeholderLabel="Type Description..." value={orgdes} onChange={(e) => setOrgdes(e.target.value)} />
        <button className='rounded-lg uppercase font-bold' id={styleCss.btnsignin} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateOrganization;
