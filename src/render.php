<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php if ( !empty( $attributes['videoId'] ) ) { ?>
	<iframe src="https://www.facebook.com/plugins/video.php?height=282&href=https%3A%2F%2Fwww.facebook.com%2F100071784070936%2Fvideos%2F<?php echo( $attributes['videoId'] ) ?>%2F&show_text=false&width=500&t=0"
		width="670" height="400" style="border:none;overflow:hidden;display:block;" scrolling="no" frameborder="0" allowfullscreen="true"
		allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
	<?php } ?>
</div>
