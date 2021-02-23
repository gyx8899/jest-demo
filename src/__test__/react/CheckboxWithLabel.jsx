import React from 'react';

export default class CheckboxWithLabel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isChecked: false};

		// bind manually because React class components don't auto-bind
		// http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
		this.onChange = this.onChange.bind(this);
	}

	onChange() {
		// eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
		this.setState({isChecked: !this.state.isChecked});
	}

	render() {
		return (
				// eslint-disable-next-line react/prop-types,jsx-a11y/label-has-associated-control,react/destructuring-assignment
				<label ref={this.props.labelRef}>
					<input
						ref={this.props.inputRef}
						type="checkbox"
						checked={this.state.isChecked}
						onChange={this.onChange}
					/>
					{this.state.isChecked ? this.props.labelOn : this.props.labelOff}
				</label>
		);
	}
}
