from flask import Blueprint, jsonify, request
from controllers.OrmController import get_ventas

bp = Blueprint('ORMQuery', __name__, url_prefix="/ORMQuery")

@bp.route("/", methods=["POST"])
def get_ventas_orm():

    fecha = request.json["fecha"]

    result = get_ventas(fecha)
    
    return jsonify(result)