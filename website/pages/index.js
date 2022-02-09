import Layout from '../components/layout'
import Card from '../components/card'

export default function Home() {
    return (
      	<Layout subTitle='Home'>
        	
      		{/* The cards div */}
			<div className='text-5xl pb-5 pt-5'>
				What I am working on
			</div>
			<div className='grow h-fit w-full flex flex-col justify-center'>
				<div className='flex flex-row items-center pt-5 pb-5 w-full justify-center space-x-14'>
					<Card 
						imagesrc={'/rationality_from_ai_to_zombies_cover.jpg'} 
						title={'\'Exploring the Sequences\' Blog Posts'} 
						link='/ExploringTheSequences'/>
				</div>
				
			</div>
    	</Layout>    
  	)
}
