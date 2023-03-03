import React, { ChangeEventHandler} from 'react';
import './searchbox.styles.css';

// Interface
// interface ISearchBoxProps {
//     placeholder?: string;
//     onSearchChange: (a: object) => void; 
// }

// Extendsible Interface 
// interface ISearchBoxProps extends ISearchHandleChange{
//     placeholder?: string;
// }

// interface ISearchHandleChange {
//     onSearchChange: (a: object) => void; 
// }

// Overloaded Interface
// interface ISearchBoxProps {
//     placeholder?: string;
// }

// interface ISearchBoxProps {
//     onSearchChange: (a: object) => void; 
// }

// Type with Union
// type AmericanAddress = {
//     street: string
//     province: string
// }

// type EuropeAddress = {
//     street: string
//     state: string
// }

// type GeneralAddress = AmericanAddress | EuropeAddress

// const address: GeneralAddress = {
//     street: 'Nagoya',
//     state: 'Romawi'
// }

// console.log(address)

type SearchBoxProps = {
    placeholder?: string
    onSearchChange: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({placeholder, onSearchChange}: SearchBoxProps) => {
    return (
        <input className='search' type='search' placeholder={placeholder} onChange={onSearchChange}/>
    )
}

export default SearchBox;