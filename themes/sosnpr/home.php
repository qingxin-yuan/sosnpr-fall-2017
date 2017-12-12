<?php
/**
 * The template for displaying all pages.
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		  <div class="updates-hero">
		   <h2><?php echo wp_title();?></h2>
			</div>

		<section class="stories-container">
			<?php while ( have_posts() ) : the_post(); ?>

      
				<div class="journal-container">
					<?php the_post_thumbnail( 'large' ); ?>
					<div class="button-container">
					 <p class="post-title"><?php the_title();?></p>
					 <?php red_starter_posted_on(); ?>
					 <a href="<?php echo the_permalink();?>"><button class="read-more">Read More</button></a>
         </div>
        </div>
				
			

			<?php endwhile; // End of the loop. ?>
			<?php red_starter_numbered_pagination(); ?>
      
		</section>


		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>