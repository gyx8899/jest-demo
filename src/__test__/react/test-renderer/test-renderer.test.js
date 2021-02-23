/* eslint-disable */
import React from 'react';
import TestRenderer, {act, create} from 'react-test-renderer';

function Link(props) {
	return <a href={props.page}>{props.children}</a>;
}

function MyComponent(props = {value: 0}) {
	return (
			<div>
				<SubComponent foo="bar" />
				<p className="my">
$
{props.value}
    </p>
			</div>
	);
}

function SubComponent() {
	return (
			<p className="sub">Sub</p>
	);
}

class InputComponent extends React.Component {
	constructor(props) {
		super(props);
		this.input = null;
	}

	componentDidMount() {
		this.input.focus();
	}

	render() {
		return <input type="text" ref={(el) => this.input = el} />;
	}
}

describe('testRenderer', () => {
	test('testRenderer.toJSON()', () => {
		const testRenderer = TestRenderer.create(
				<Link page="https://www.facebook.com/">Facebook</Link>,
		);

		console.log(testRenderer.toJSON());
// { type: 'a',
//   props: { href: 'https://www.facebook.com/' },
//   children: [ 'Facebook' ] }
		expect(testRenderer.toJSON()).not.toBeNull();
	});

	test('testRenderer.root.findByType, findByProps', () => {
		const testRenderer = TestRenderer.create(<MyComponent />);
		const testInstance = testRenderer.root;

		expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
		expect(testInstance.findByProps({className: 'sub'}).children).toEqual(['Sub']);
	});

// 	test('act', () => {
// 		// 渲染组件
// 		let root;
// 		act(() => {
// 			root = create(<MyComponent value={1}/>)
// 		});
//
// // 对根元素进行断言
// 		expect(root.toJSON()).toMatchSnapshot();
//
// // 更新 props
// 		act(() => {
// 			root = root.update(<MyComponent value={2}/>);
// 		});
//
// // 对根元素进行断言
// 		expect(root.toJSON()).toMatchSnapshot();
// 	})

	test('focus', () => {
		let focused = false;
		TestRenderer.create(
				<InputComponent />,
				{
					createNodeMock: (element) => {
						if (element.type === 'input') {
							// 模拟 focus 函数
							return {
								focus: () => {
									focused = true;
								},
							};
						}
						return null;
					},
				},
		);
		expect(focused).toBe(true);
	});
});
