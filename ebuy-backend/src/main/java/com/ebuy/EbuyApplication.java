package com.ebuy;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import springfox.documentation.swagger2.annotations.EnableSwagger2;


//@EnableWebMvc

//@ComponentScan(
//		"com.ebuy"
//)
@EnableJpaRepositories("com.ebuy.dao")
@EntityScan("com.ebuy.data")
@OpenAPIDefinition(info = @Info(title = "Ebuy API", version = "1.0", description = "Book Store"))
@SpringBootApplication
public class EbuyApplication {

	public static void main(String[] args) {
		SpringApplication.run(EbuyApplication.class, args);
	}

}
