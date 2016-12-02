import React from 'react';

//{props.colors.map(color => <li dangerouslySetInnerHTML={({ __html: '<b>' + color + '</b>'})} />)}

export const ColorList = props => <ul>
	{props.colors.map(color => <li>{color}</li>)}
</ul>;

ColorList.propTypes = {
	colors: React.PropTypes.array
};