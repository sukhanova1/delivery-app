import React from 'react';

import { SELECT_DEFAULT_VALUE } from '../../utils/constants';

import './Select.css';

const Select = ({ id, options, setTruckType }) => {
	const handleChange = (e) => setTruckType(e.target.value);

	return (
		<>
			<label htmlFor={id}></label>
			<select
				id={id}
				name={id}
				className='select'
				onChange={handleChange}
				defaultValue={SELECT_DEFAULT_VALUE}
			>
				<option value={SELECT_DEFAULT_VALUE} disabled>
					{SELECT_DEFAULT_VALUE}
				</option>
				{options.map((value) => (
					<option value={value} key={value}>
						{value}
					</option>
				))}
			</select>
		</>
	);
};

export default Select;
