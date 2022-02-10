export $(grep -v '^#' .env | xargs)

echo "echo stop & remove old docker [$POSTGRES_SERVER] and starting new fresh instance of [$POSTGRES_SERVER]"
(docker kill $POSTGRES_SERVER || :) && \
  (docker rm $POSTGRES_SERVER || :) && \
  docker run --name $POSTGRES_SERVER -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
  -e PGPASSWORD=$POSTGRES_PASSWORD \
  -p 5432:5432 \
  -d postgres

# wait for pg to start
echo "sleep wait for pg-server [$POSTGRES_SERVER] to start";
sleep 3;

# create the db 
echo "CREATE DATABASE $POSTGRES_DATABASE ENCODING 'UTF-8';" | docker exec -i $POSTGRES_SERVER psql -U postgres
echo "\l" | docker exec -i $POSTGRES_SERVER psql -U postgres
