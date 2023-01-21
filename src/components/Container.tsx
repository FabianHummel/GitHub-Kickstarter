import { Component, JSX } from "solid-js"

export const Container : Component<JSX.BaseHTMLAttributes<HTMLBaseElement>> = (props) => {
	return (
		<section class="p-5 grid grid-cols-[1fr] gap-x-4 gap-y-6
			lg:grid-cols-[1fr_1fr_1fr] md:gap-x-8">
			{props.children}
		</section>
	)
}