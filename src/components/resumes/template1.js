import React from 'react';
import { useSelector } from 'react-redux';

export default function Template1() {
    const personalDetails = useSelector((state) => state.personalDetails.value);
    return (
        <div>
            <p>{personalDetails.firstName} {personalDetails.lastName}</p>
            <div>
                <p>{personalDetails.jobTitle}</p>
                <p>{personalDetails.city},{personalDetails.postalCode},{personalDetails.nationality}</p>
                <p>{personalDetails.phone}</p>
            </div>
            <div>
                <div>
                    <p>Personal Details</p>
                    <p>{personalDetails.address}</p>
                    <p>{personalDetails.city} {personalDetails.postalCode}</p>
                    <p>{personalDetails.nationality}</p>
                    <p>{personalDetails.phone}</p>
                    <p>{personalDetails.email}</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}
