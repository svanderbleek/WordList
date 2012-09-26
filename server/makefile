couch = localhost:5984

start_db:
	couchdb

create_db:
	curl -X PUT $(couch)/wordlist_test

drop_db:
	curl -X DELETE $(couch)/wordlist_test

.PHONY: start_db create_db drop_db
