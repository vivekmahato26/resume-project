import { useState } from 'react'
import {
    Label,
    Input,
    Button,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Row,
    Col
} from 'reactstrap';
import { useDispatch } from 'react-redux';

export default function Employment({ data }) {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    const dispatch = useDispatch();
    const { addItem, modifyItem, deleteItem } = data.redux.actions;
    return (
        <div>
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
            <div>
                <Button color='primary' onClick={() => dispatch(addItem())}>Add Item</Button>
            </div>
            <Accordion open={open} toggle={toggle}>
                {data.redux.state.map((emp, index) => {
                    let arr = [];
                    for (const key in data.form) {
                        arr.push(
                            <Col md={data.form[key].col}>
                                <Label for={data.form[key].name}>
                                    {data.form[key].value}
                                </Label>
                                <Input
                                    id={data.form[key].name}
                                    name={data.form[key].name}
                                    placeholder={data.form[key].value}
                                    value={emp[key]}
                                    type={data.form[key].type ? data.form[key].type : "text"}
                                    onChange={(e) => { dispatch(modifyItem({ key: e.target.name, value: e.target.value, id: emp.id })) }}
                                />
                            </Col>

                        )
                    }

                    return (
                        <AccordionItem>
                            <AccordionHeader targetId={index}>{emp.jobTitle}</AccordionHeader>
                            <AccordionBody accordionId={index}>
                                {arr.map(e => e)}
                                <Button color='danger' onClick={() => dispatch(deleteItem(emp.id))}>Delete</Button>
                            </AccordionBody>
                        </AccordionItem>
                    )
                })}
            </Accordion >
        </div >
    )
}
