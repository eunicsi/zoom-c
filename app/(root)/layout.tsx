import React from "react";

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
	const { children } = props;

	return <main>{children}</main>;
};

export default RootLayout;
