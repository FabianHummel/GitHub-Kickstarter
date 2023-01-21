import { Component, For, JSX } from "solid-js"

export const Column : Component<JSX.BaseHTMLAttributes<HTMLBaseElement>> = (props) => {
	return (
		<div>
			<h1 class="text-xl font-bold mb-5">{props.title}</h1>
			<div class="flex flex-col gap-5 sm:grid sm:grid-cols-[1fr_1fr] lg:flex">
				{props.children}
			</div>
		</div>
	)
}