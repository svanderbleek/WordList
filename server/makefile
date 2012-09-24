couch = localhost:5984

create_db:
	curl -X PUT $(couch)/wordlist_test

drop_db:
	curl -X DELETE $(couch)/wordlist_test

.PHONY: create_db drop_db
