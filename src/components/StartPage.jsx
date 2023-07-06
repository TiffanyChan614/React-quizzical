export default function StartPage({ handleSubmit, handleChange }) {
	return (
		<div className='start content'>
			<h1>Quizzical</h1>
			<p>Are you ready to test your brain?</p>
			<form className='form'>
				<label htmlFor='num-questions'>Number of questions:</label>
				<input
					type='number'
					id='num-questions'
					name='num-questions'
					placeholder='Enter a number between 1 and 50'
					onChange={(event) => handleChange(event)}
				/>
				<label htmlFor='category'>Category:</label>
				<select
					id='category'
					name='category'
					onChange={handleChange}>
					<option value=''>Any category</option>
					<option value='9'>General Knowledge</option>
					<option value='10'>Entertainment: Books</option>
					<option value='11'>Entertainment: Film</option>
					<option value='12'>Entertainment: Music</option>
					<option value='13'>Entertainment: Musicals &amp; Theatres</option>
					<option value='14'>Entertainment: Television</option>
					<option value='15'>Entertainment: Video Games</option>
					<option value='16'>Entertainment: Board Games</option>
					<option value='17'>Science &amp; Nature</option>
					<option value='18'>Science: Computers</option>
					<option value='19'>Science: Mathematics</option>
					<option value='20'>Mythology</option>
					<option value='21'>Sports</option>
					<option value='22'>Geography</option>
					<option value='23'>History</option>
					<option value='24'>Politics</option>
					<option value='25'>Art</option>
					<option value='26'>Celebrities</option>
					<option value='27'>Animals</option>
					<option value='28'>Vehicles</option>
					<option value='29'>Entertainment: Comics</option>
					<option value='30'>Science: Gadgets</option>
					<option value='31'>Entertainment: Japanese Anime &amp; Manga</option>
					<option value='32'>Entertainment: Cartoon &amp; Animations</option>
				</select>
				<label htmlFor='difficulty'>Difficulty:</label>
				<select
					id='difficulty'
					name='difficulty'
					onChange={handleChange}>
					<option value=''>Any difficulty</option>
					<option value='easy'>Easy</option>
					<option value='medium'>Medium</option>
					<option value='hard'>Hard</option>
				</select>
				<label htmlFor='type'>Question type:</label>
				<select
					id='type'
					name='type'
					onChange={handleChange}>
					<option value=''>Any type</option>
					<option value='multiple'>Multiple choice</option>
					<option value='boolean'>True / False</option>
				</select>
				<button
					className='start-btn'
					onClick={(event) => handleSubmit(event)}>
					Start quiz
				</button>
			</form>
		</div>
	)
}
