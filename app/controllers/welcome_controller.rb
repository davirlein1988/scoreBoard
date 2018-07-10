class WelcomeController < ApplicationController 
	def index
	end


	def fight_score
		fh = FightScore.order(score: :desc).limit(10)
		fh = fh || FightScore.new
		render json: {fight_score: fh.score, name: hs.name}.to_json
	end

	def create_score
		FightScore.create(fight_score_params)
		render status: 200, json: {message: 'new entry updated'}.to_json
	end

	def fight_score_params
		params.require(:fight_score).permit(:score, :name)
	end

end 