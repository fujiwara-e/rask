class Api::WelcomeController < ApplicationController
  skip_before_action :logged_in_user
  skip_before_action :verify_authenticity_token

  def index
    @test = 'test'
    render json: { test: @test }
  end
end
