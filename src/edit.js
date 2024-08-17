/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const videoIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg>
)

function parseEmbedCode(embedCode, videoId)
{
	var pattern = /%2Fvideos%2F(?<videoId>\d*)%2F/gm;
	var result = embedCode.match(pattern);

	if (result) return result[0].replace('%2Fvideos%2F', '').replace('%2F', '');
	return videoId;
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { videoId } = attributes;
    return (
		<>
		<InspectorControls>
			<PanelBody title={__( 'Settings', 'facebook-embed-video' )}>

				<TextControl
					label={ __( 'Video ID', 'facebook-embed-video' ) }
					value={ videoId || '' } onChange={ ( value ) => setAttributes( { videoId: value } ) } />

				<TextControl
					label={ __( 'Paste Embed Code', 'facebook-embed-video' ) }
					value={ '' } onChange={ ( value ) => setAttributes( { videoId: parseEmbedCode(value) } ) } />

			</PanelBody>
		</InspectorControls>
        <div { ...useBlockProps() } style={{ width: '100%', minHeight: '300px', border: '1px solid lightgray', padding: '16px' }}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ height: '64px', width: '64px' }}>
				<path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/>
			</svg>
			<p>Facebook Embedded Video</p>
		</div>
		</>
    );
}
