import Image from "next/image";

export default function Headlines({src, alt}) {
	return(
		<div>
			<Image src={ src } width={ 250 } height={ 250 } alt={ alt } />
			<h1>This is Headlines</h1>
		</div>
	)
}