class PeopleController < ApplicationController
  def index
    @people = Person.all
    # render json: @people
    render json: @people, status: :ok
  end
  def create
    content_type = request.headers["Content-Type"]
    @body = JSON.parse(request.body.read)
    # puts "hellooo #{@body['name']}"
    # @person = Person.new(person_params)
    @person = Person.create(name: @body['name'], about: @body['about'])
    render json: @person, status: :created
  end

  def destroy
    @person = Person.find(params[:id])
    @person.destroy
    render json: @person, status: :ok
  end

  def update
    # @person = JSON.parse(request.body.read)
    # @person.update(person_params)
    @person = Person.find(params[:id])
    @body = JSON.parse(request.body.read)
    @person.update(name: @body['name'], about: @body['about'])
    render json: @person, status: :ok
  end



end
