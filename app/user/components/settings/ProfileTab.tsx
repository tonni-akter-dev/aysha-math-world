/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import profile from '../../../../public/profile.png';
import { TrashIcon } from 'lucide-react';

const ProfileTab = () => {
    const [selectedClass, setSelectedClass] = useState("");

    // --- State for Family Section ---
    const [familyMembers, setFamilyMembers] = useState([
        { id: 1, name: '', gender: '', address: '' }
    ]);

    // Logic to set upcoming year as default for Batch Year
    const [batchYear, setBatchYear] = useState("");
    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const nextYear = currentYear + 1;
        setBatchYear(nextYear.toString());
    }, []);
    // --- State for Social Links ---
    const [socialLinks, setSocialLinks] = useState([
        { id: 1, platform: 'facebook', value: '' }
    ]);

    // Logic to check if Group/Batch should be shown (Class 9-12)
    const isHighSchool = ['9', '10', '11', '12'].includes(selectedClass);

    // --- Handlers ---

    // Family Handlers
    const addFamilyMember = () => {
        const newId = familyMembers.length > 0 ? Math.max(...familyMembers.map(m => m.id)) + 1 : 1;
        setFamilyMembers([...familyMembers, { id: newId, name: '', gender: '', address: '' }]);
    };

    const removeFamilyMember = (id: number) => {
        setFamilyMembers(familyMembers.filter(member => member.id !== id));
    };

    const handleFamilyChange = (id: number, field: string, value: string) => {
        setFamilyMembers(familyMembers.map(member =>
            member.id === id ? { ...member, [field]: value } : member
        ));
    };

    // Social Handlers
    const addSocialLink = () => {
        const newId = socialLinks.length > 0 ? Math.max(...socialLinks.map(l => l.id)) + 1 : 1;
        setSocialLinks([...socialLinks, { id: newId, platform: 'facebook', value: '' }]);
    };

    const removeSocialLink = (id: number) => {
        setSocialLinks(socialLinks.filter(link => link.id !== id));
    };

    const handleSocialChange = (id: number, field: string, value: string) => {
        setSocialLinks(socialLinks.map(link =>
            link.id === id ? { ...link, [field]: value } : link
        ));
    };

    return (
        <div className="w-full  p-6 md:p-8 rounded-xl  space-y-8">

            {/* --- Profile Photo --- */}
            <div>
                <h4 className="text-base font-semibold text-gray-900 mb-3">Profile Photo</h4>
                <div className="flex items-start sm:items-center gap-6">
                    <div className="relative">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 bg-gray-50 relative">
                            <Image
                                src={profile}
                                alt="profile"
                                fill
                                className="object-cover"
                                // Optional: Fallback styling if image is missing
                                style={{ objectPosition: 'center' }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm">
                            Upload Image
                        </button>
                        <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Name Fields --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <input
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all placeholder-gray-400 text-sm"
                        placeholder="First Name"
                        defaultValue="Courtney"
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all placeholder-gray-400 text-sm"
                        placeholder="Last Name"
                        defaultValue="Henry"
                    />
                </div>
            </div>

            {/* --- Email --- */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Gmail</label>
                <input
                    type="email"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all placeholder-gray-400 text-sm"
                    placeholder="example@gmail.com"
                />
            </div>

            {/* --- Phone --- */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Phone (Optional)</label>
                <input
                    type="tel"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all placeholder-gray-400 text-sm"
                    placeholder="+1 (555) 000-0000"
                />
            </div>

            {/* --- Class Selection --- */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Class</label>
                <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all text-sm bg-white"
                >
                    <option value="" disabled>Select Class</option>
                    {[7, 8, 9, 10, 11, 12].map((cls) => (
                        <option key={cls} value={cls.toString()}>Class {cls}</option>
                    ))}
                </select>
            </div>

            {/* --- Conditional: Group & Batch Year (Only for 9, 10, 11, 12) --- */}
            {isHighSchool && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">

                    {/* Group Selection */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-700">Group</label>
                        <select
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all text-sm bg-white"
                        >
                            <option value="" disabled>Select Group</option>
                            <option value="science">Science</option>
                            <option value="commerce">Commerce</option>
                            <option value="arts">Arts</option>
                            <option value="vocational">Vocational</option>
                        </select>
                    </div>

                    {/* Batch Year (Upcoming Year) */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-700">Batch Year (Exam)</label>
                        <select
                            value={batchYear}
                            onChange={(e) => setBatchYear(e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all text-sm bg-white"
                        >
                            {Array.from({ length: 5 }, (_, i) => {
                                const year = new Date().getFullYear() + 1 + i;
                                return <option key={year} value={year.toString()}>{year}</option>;
                            })}
                        </select>
                    </div>

                </div>
            )}

            {/* --- Gender --- */}
            <div>
                <p className="text-sm font-semibold text-gray-900 mb-3">Gender</p>
                <div className="flex gap-6 text-sm text-gray-700">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
                        <input type="radio" name="gender" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 accent-blue-600" />
                        Male
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
                        <input type="radio" name="gender" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 accent-blue-600" />
                        Female
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
                        <input type="radio" name="gender" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 accent-blue-600" />
                        Other
                    </label>
                </div>
            </div>

            {/* --- 3. Family Information (Dynamic) --- */}
            <div className="pt-6 border-t border-gray-100 space-y-4">
                <div className="flex justify-between items-center">
                    <h5 className="text-sm font-semibold text-gray-900">Family / Nationality Info</h5>
                    <button
                        type="button"
                        onClick={addFamilyMember}
                        className="text-blue-600 text-sm font-medium hover:text-blue-700"
                    >
                        + Add Member
                    </button>
                </div>

                {familyMembers.map((member, index) => (
                    <div key={member.id} className="relative bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4">
                        <div className="absolute top-4 right-4">
                            <button
                                type="button"
                                onClick={() => removeFamilyMember(member.id)}
                                className="p-1 hover:bg-red-100 rounded-full transition-colors"
                                title="Delete"
                            >
                                <TrashIcon />
                            </button>
                        </div>

                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">
                                {index + 1}
                            </span>
                            Member {index + 1}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-gray-600">Name *</label>
                                <input
                                    value={member.name}
                                    onChange={(e) => handleFamilyChange(member.id, 'name', e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-gray-600">Gender *</label>
                                <select
                                    value={member.gender}
                                    onChange={(e) => handleFamilyChange(member.id, 'gender', e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none bg-white"
                                >
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-gray-600">Address *</label>
                                <input
                                    value={member.address}
                                    onChange={(e) => handleFamilyChange(member.id, 'address', e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Address Section --- */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
                <h5 className="text-sm font-semibold text-gray-900">Address Details</h5>

                {/* Address Line */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">Street Address</label>
                    <input
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all placeholder-gray-400 text-sm"
                        placeholder="House no, Building, Street, Area"
                    />
                </div>

                {/* City & Zip */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-700">City</label>
                        <input
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all placeholder-gray-400 text-sm"
                            placeholder="City Name"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-700">Zip Code</label>
                        <input
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all placeholder-gray-400 text-sm"
                            placeholder="12345"
                        />
                    </div>
                </div>

                {/* Area & Post Code */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-700">Area</label>
                        <input
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all placeholder-gray-400 text-sm"
                            placeholder="Locality / Sector"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-700">Post Code</label>
                        <input
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all placeholder-gray-400 text-sm"
                            placeholder="Post Code"
                        />
                    </div>
                </div>
            </div>
            <div className="space-y-4 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center">
                    <h5 className="text-sm font-semibold text-gray-900">Social Profiles</h5>
                    <button
                        type="button"
                        onClick={addSocialLink}
                        className="text-blue-600 text-sm font-medium hover:text-blue-700"
                    >
                        + Add Link
                    </button>
                </div>

                {socialLinks.map((link) => (
                    <div key={link.id} className="flex gap-3 items-center">
                        <select
                            value={link.platform}
                            onChange={(e) => handleSocialChange(link.id, 'platform', e.target.value)}
                            className="w-40 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none bg-white"
                        >
                            <option value="facebook">Facebook</option>
                            <option value="instagram">Instagram</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="whatsapp">WhatsApp</option>
                            <option value="other">Other</option>
                        </select>
                        <input
                            type="text"
                            value={link.value}
                            onChange={(e) => handleSocialChange(link.id, 'value', e.target.value)}
                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all placeholder-gray-400 text-sm"
                            placeholder="Profile URL"
                        />
                        <button
                            type="button"
                            onClick={() => removeSocialLink(link.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            <TrashIcon />
                        </button>
                    </div>
                ))}
            </div>
            {/* --- Footer / Action --- */}
            <div className="flex justify-end pt-6 border-t border-gray-100">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm active:transform active:scale-95">
                    Save Changes
                </button>
            </div>

        </div>
    );
};

export default ProfileTab;