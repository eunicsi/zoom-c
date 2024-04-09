import React from "react";

interface MeetingProps {
	params: { id: string };
}

const Meeting = (props: MeetingProps) => {
	const { params } = props;

	return <div>Meeting Room: #{params.id}</div>;
};

export default Meeting;
