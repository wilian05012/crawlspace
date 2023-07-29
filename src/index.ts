import * as ko from 'knockout';
import './styles/index.scss';
import  contratorsData from './data/contractors.json';
import { Contractor } from './classes/contractor';

const model = {
    contractors: <Contractor[]>contratorsData
}

ko.applyBindings(model);
