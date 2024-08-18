<?php
    add_action( 'admin_menu', function() {
        add_options_page( 'Facebook Embed Video Options', 'Facebook Embed Video Options', 'manage_options', 'facebook-embed-video-options', 'render_options' );
    });

	add_action( 'admin_init', function() {
        register_setting( 'facebook-embed-video-settings', 'page_id' );
        register_setting( 'facebook-embed-video-settings', 'video_id' );
    });

    function render_options() {
        if ( !current_user_can( 'manage_options' ) )  {
            wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
        }
?>
<div class="wrap">
<h2>Facebook Embed Video Options</h2>

<form method="post" action="options.php">
    <?php settings_fields( 'facebook-embed-video-settings' ); ?>
    <?php do_settings_sections( 'facebook-embed-video-settings' ); ?>
    <table class="form-table">
        <tr valign="top">
			<th scope="row">Page ID</th>
			<td>
				<input name="page_id" id="page_id" class="large-text" value="<?php echo esc_attr( get_option('page_id') ); ?>"></input>
			<td>
        </tr>
        <tr valign="top">
			<th scope="row">Video ID</th>
			<td>
				<input name="video_id" id="video_id" class="large-text" value="<?php echo esc_attr( get_option('video_id') ); ?>"></input>
			<td>
        </tr>
    </table>

    <?php submit_button(); ?>

</form>
</div>
<?php } ?>
