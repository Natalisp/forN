json.extract! datum, :id, :month, :profits, :inventory, :created_at, :updated_at
json.url datum_url(datum, format: :json)