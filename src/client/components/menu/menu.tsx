import React from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { selectPage } from "client/store/page";
import { Store } from "../store/store";

export function Menu() {
	const page = useSelector(selectPage);

	return <>{page === "STORE" && <Store />}</>;
}
