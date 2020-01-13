Structures de l'application :

Front app :

App()

	KickOffPage

		TexteDescriptif
		SurveyForm  (set of questions data) [category dispatching]

			CategoryBoxSurvey (set keeping) [mass of questions per box handling]

				BoxQR (sentence / stars / not-important) [display question&features]

					QuestionSurvey [display the question]
					Star (deal with this.changeScore)
					NotImportant
					


