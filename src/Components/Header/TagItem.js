function TagItem({ nameTag, index }) {
	return (
		<button
			className={index === 0 ? 'tag__item tag__item--active' : 'tag__item'}>
			{nameTag}
		</button>
	)
}

export default TagItem
