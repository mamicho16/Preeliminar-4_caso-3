from sqlalchemy.orm import sessionmaker
from repositories.orm import engine,Ventas,User,Cliente

def get_ventas(fecha):
    try:
        
        Session = sessionmaker(bind=engine)
        session = Session()

        query = session.query(Ventas.idventas,
        Ventas.monto,
        Ventas.vuelto,
        Ventas.fechaventa,
        Cliente.nombre.label('cliente'),
        User.nombre.label('usuario')
        ).join(User, Ventas.iduser == User.iduser).join(Cliente, Ventas.idcliente == Cliente.idcliente).filter(Ventas.fechaventa > fecha)

        results = []
        for item in query:
            results.append({
                'idventas': item.idventas,
                'monto': str(item.monto),
                'vuelto': str(item.vuelto),
                'fechaventa': str(item.fechaventa),
                'cliente': item.cliente,
                'usuario': item.usuario,
            })
        session.close()
        return results
    except Exception as e:
        print('An error occurred:', e)
        return []
