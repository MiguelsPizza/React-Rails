class api::BaseController < ApplicationController
  # include Api::V1::BaseControllerDoc

  # before_action :authenticate_user!
  # before_action :set_default_response_format

  # private
  # def set_default_response_format
  #   request.format = :json
  # end
  respond_to :json
  respond_with :json
end