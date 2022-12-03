import React from 'react'

import { useDispatch } from 'react-redux';
import { update } from '../redux/slice/personalDetails';

import { Label, Input } from 'reactstrap';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';

import styles from "../styles/personalDetails.module.scss";


export default function PersonalDetails() {
    const dispatch = useDispatch();


    const date = new Date()
    const [value, setValue] = React.useState(dayjs(date));

    const handleUpload = async (event) => {
        const url = "https://api.cloudinary.com/v1_1/dwdy4lewd/image/upload";
        const formData = new FormData();

        formData.append("upload_preset", "resume");
        const file = event.target.files;
        formData.append("file", file[0]);

        const response = await axios.post(url, formData);
        if (response.data.url) {
            dispatch(update({
                key: event.target.name,
                value: response.data.url
            }))
        }
    }
    return (
        <div>
            <p>Personal Details</p>
            <div className={styles.gridContainer}>
                <div>
                    <Label for="jobTitle">
                        Job Title
                    </Label>
                    <Input
                        id="jobTitle"
                        name="jobTitle"
                        placeholder="Job Title"
                        type="text"
                        onChange={(e) => {
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <Label
                        for="profile"
                    >
                        Upload Photo
                    </Label>
                    <Input
                        id="profile"
                        name="profile"
                        type="file"
                        onChange={(e) => handleUpload(e)}
                    />
                </div>
                <div>
                    <Label for="firstName">
                        First Name
                    </Label>
                    <Input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                        onChange={(e) => {
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <Label for="lastName">
                        Last Name
                    </Label>
                    <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        type="text"
                        onChange={(e) => {
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <Label for="email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="text"
                        onChange={(e) => {
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <Label for="phone">
                        Phone
                    </Label>
                    <Input
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        type="text"
                        onChange={(e) => {
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <Label for="country">
                        Country
                    </Label>
                    <Input
                        id="country"
                        name="country"
                        placeholder="Country"
                        type="text"
                        onChange={(e) => {
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <Label for="city">
                        City
                    </Label>
                    <Input
                        id="city"
                        name="city"
                        placeholder="City"
                        type="text"
                        onChange={(e) => {
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <Label for="address">
                        Address
                    </Label>
                    <Input
                        id="address"
                        name="address"
                        placeholder="Address"
                        type="text"
                        onChange={(e) => {
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <Label for="postalCode">
                        Postal Code
                    </Label>
                    <Input
                        id="postalCode"
                        name="postalCode"
                        placeholder="Postal Code"
                        type="text"
                        onChange={(e) => {
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <Label for="idProof">
                        Id Proof
                    </Label>
                    <Input
                        id="idProof"
                        name="idProof"
                        placeholder="Id Proof"
                        type="text"
                        onChange={(e) => {
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <Label for="nationality">
                        Nationality
                    </Label>
                    <Input
                        id="nationality"
                        name="nationality"
                        placeholder="Nationality"
                        type="text"
                        onChange={(e) => {
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <Label for="placeOfBirth">
                        Place Of Birth
                    </Label>
                    <Input
                        id="placeOfBirth"
                        name="placeOfBirth"
                        placeholder="Place Of Birth"
                        type="text"
                        onChange={(e) => {
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    {/* <Label for="dateOfBirth">
                        Date Of Birth
                    </Label>
                    <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        placeholder="Date Of Birth"
                        type="date"
                    /> */}
                    <br />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/DD/YYYY"
                            value={value}
                            onChange={(val) => {
                                setValue(val)
                                dispatch(update({
                                    key: "dateOfBirth",
                                    value: val
                                }))
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            <h4>Professional Summary</h4>
            <p>Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.</p>
            <Label for="professionalSummary">
                Professional Summary
            </Label>
            <Input
                id="professionalSummary"
                name="professionalSummary"
                type="textarea"
                onChange={(e) => {
                    dispatch(update({
                        key: e.target.name,
                        value: e.target.value
                    }))
                }}
            />
        </div>
    )
}
