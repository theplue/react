"use strict";

var React = require('react');

// reusable select element (drop-down box)
module.exports = React.createClass({
	
	propTypes: {
		
		// the list of objects to choose from
		optionList: React.PropTypes.array.isRequired,
		
		// handler for an option being selected
		optionSelected: React.PropTypes.func.isRequired,

		// the currently selected value		
		//selectedValue: React.PropTypes.string.isRequired,
		
		// the property of the objects in optionList to use
		// as the value property of each option element
		valueProperty: React.PropTypes.string.isRequired,
		
		// the property of the objects in optionList to use
		// as the display property of each option element
		displayProperty: React.PropTypes.string.isRequired,

		altDisplayProperty: React.PropTypes.string


	},
	
	// local handler for an option being selected
	optionSelected: function(event) {
		//console.log(event.target.value);
		// pass the selected value to the optionSelected prop
		this.props.optionSelected(event.target.value);
	},
	
	render: function() {
		

		
		// create an option element for each item in this.props.optionList
		var selectOptions = this.props.optionList.map(function(item) {
			var optional1 = (item[this.props.altDisplayProperty] === undefined)
			? ''
			: item[this.props.altDisplayProperty];
			var optional = (this.props.altDisplayProperty === 'studydate')
			? (new Date(item[this.props.altDisplayProperty]))
			: optional1;

			var show = item[this.props.displayProperty] + " " + optional;
			return (
				<option key={item[this.props.valueProperty]} value={item[this.props.valueProperty]}>
					{show}
				</option>
			);
		}.bind(this));

		var selectdisp = (this.props.selectDisplay)
			? selectOptions.splice(0, 0, <option key='-1' defaultValue="" >Select your option</option>)
			: '';
		
		return (
			<select
				className="form-control"
				value={this.props.selectedValue}
				onChange={this.optionSelected}>
				{selectOptions}
			</select>
		);
	}
});