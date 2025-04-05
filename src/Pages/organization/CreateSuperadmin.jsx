import React, { useState } from 'react';
import TextInput from '../../components/FormComponents/TextInput';
import RoleDropdown from '../../components/FormComponents/Role';
import PasswordInput from '../../components/FormComponents/password';
import styleCss from '../authPages/signin.module.css';
import { useCreateSuperAdmin } from '../../controller/SuperadminController';
import Swal from 'sweetalert2';

export const CreateSuperadmin = () => {
    const roleOptions = ["Admin","Super Admin"];
    
    const [adminname, setName] = useState("");
    const [adminemail, setEmail] = useState("");
    const [adminphone, setPhone] = useState("");
    const [adminrole, setRole] = useState("");
    const [adminpassword, setPassword] = useState("");
    const [adminorgId, setOrgId] = useState("");

    const createsuperadminMutation = useCreateSuperAdmin();
    
    
    const validateFields = () => {
        if (!adminname.trim()) {
            Swal.fire({ icon: "error", title: "Missing Name", text: "Please enter the name." });
            return false;
        }
        if (!adminemail.trim()) {
            Swal.fire({ icon: "error", title: "Missing Email", text: "Please enter an email address." });
            return false;
        }
        if (!adminphone.trim()) {
            Swal.fire({ icon: "error", title: "Missing Phone", text: "Please enter a phone number." });
            return false;
        }
        if (!adminrole) {
            Swal.fire({ icon: "error", title: "Missing Role", text: "Please select a role." });
            return false;
        }
        if (adminpassword.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(adminpassword)) {
            Swal.fire({ 
                icon: "error", 
                title: "Invalid Password", 
                text: "Password must be at least 8 characters long and include a special character." 
            });
            return false;
        } 
        if (!adminorgId.trim()) {
            Swal.fire({ icon: "error", title: "Missing Organization ID", text: "Organization ID cannot be null." });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateFields()) return;
    
        const admindata = {
            adminname,
            adminemail,
            adminphone,
            adminrole,
            adminpassword,
            adminorgId,
        };
    
        try {
            await createsuperadminMutation.mutateAsync(admindata);
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Super Admin created successfully!",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK",
            });
    
            // Reset form fields
            setName("");
            setEmail("");
            setPhone("");
            setRole("");
            setPassword("");
            setOrgId("");
            
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
                <TextInput label="Name" placeholderLabel="Type Name..." value={adminname} onChange={(e) => setName(e.target.value)} />
                <TextInput label="Email" placeholderLabel="Type Email..." value={adminemail} onChange={(e) => setEmail(e.target.value)} />
                <TextInput label="Phone" placeholderLabel="Type Phone..." value={adminphone} onChange={(e) => setPhone(e.target.value)} />
                <RoleDropdown options={roleOptions} label="Role"value={adminrole} onChange={(e) => setRole(e.target.value)} />
                <PasswordInput label="Password" placeholderLabel="Type Password..." value={adminpassword} onChange={(e) => setPassword(e.target.value)} />
                <TextInput label="Organization ID" placeholderLabel="Type Organization ID..." value={adminorgId} onChange={(e) => setOrgId(e.target.value)} />
                <button className='rounded-lg uppercase font-bold' id={styleCss.btnsignin} type="submit">Add Member</button>
            </form>
        </div>
    );
};

export default CreateSuperadmin;
