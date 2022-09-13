import React from 'react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
};


export const AccordionMenu = () => <UncontrolledAccordion titleValue="Menu"/>
export const AccordionUsers = () => <UncontrolledAccordion titleValue="Users"/>