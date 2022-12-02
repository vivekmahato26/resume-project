import {useState} from 'react'
import {
    Label,
    Input,
    Button,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, modifyItem, deleteItem } from '../redux/slice/employmentSlice';

export default function Employment() {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    const dispatch = useDispatch();
    const employment = useSelector(state => state.employment.value);

    return (
        <div>
            <h3>Employment History</h3>
            <div>
                <Button color='primary' onClick={() => dispatch(addItem())}>Add Employment</Button>
            </div>
            <Accordion open={open} toggle={toggle}>
                {employment.map((emp,index) => (
                    <AccordionItem>
                        <AccordionHeader targetId={index}>Accordion Item 1</AccordionHeader>
                        <AccordionBody accordionId={index}>
                            <Label for="jobTitle">
                                Job Title
                            </Label>
                            <Input
                                id="jobTitle"
                                name="jobTitle"
                                placeholder="Job Title"
                                type="text"
                                onChange={(e) => { dispatch(modifyItem({ key: e.target.name, value: e.target.value, id: emp.id })) }}
                            />
                            <Label for="employer">
                                Employer
                            </Label>
                            <Input
                                id="employer"
                                name="employer"
                                placeholder="Employer"
                                type="text"
                                onChange={(e) => { dispatch(modifyItem({ key: e.target.name, value: e.target.value, id: emp.id })) }}

                            />
                            <Label for="start">
                                Start Date
                            </Label>
                            <Input
                                id="start"
                                name="start"
                                placeholder="MM/DD/YYYY"
                                type="text"
                                onChange={(e) => { dispatch(modifyItem({ key: e.target.name, value: e.target.value, id: emp.id })) }}

                            />
                            <Label for="end">
                                End Date
                            </Label>
                            <Input
                                id="end"
                                name="end"
                                placeholder="DD/MM/YYYY"
                                type="text"
                                onChange={(e) => { dispatch(modifyItem({ key: e.target.name, value: e.target.value, id: emp.id })) }}

                            />

                            <Label for="city">
                                City
                            </Label>
                            <Input
                                id="city"
                                name="city"
                                placeholder="City"
                                type="text"
                                onChange={(e) => { dispatch(modifyItem({ key: e.target.name, value: e.target.value, id: emp.id })) }}

                            />
                            <Label for="desc">
                                Description
                            </Label>
                            <Input
                                id="desc"
                                name="desc"
                                placeholder="Description"
                                type="textarea"
                                onChange={(e) => { dispatch(modifyItem({ key: e.target.name, value: e.target.value, id: emp.id })) }}

                            />
                        </AccordionBody>
                    </AccordionItem>
                ))
                }
            </Accordion >
        </div >
    )
}
