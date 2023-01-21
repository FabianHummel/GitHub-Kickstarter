import { Component, JSX, JSXElement } from "solid-js";

export const Limiter : Component<JSX.BaseHTMLAttributes<HTMLBaseElement>> = (props) => {
	return (
		<main class="max-w-[1200px] mx-auto">
			{ props.children }
		</main>
	)
}