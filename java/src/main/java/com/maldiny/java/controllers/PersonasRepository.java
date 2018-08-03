package com.maldiny.java.controllers;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.maldiny.java.models.Personas;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "personas", path = "personas")
@CrossOrigin
public interface PersonasRepository extends MongoRepository<Personas, String> {
}
