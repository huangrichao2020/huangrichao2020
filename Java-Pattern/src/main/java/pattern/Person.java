package pattern;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * The type Person.
 */
@Data
@AllArgsConstructor
public class Person{
    private String firstName;
    private String lastName;
    private int age;
}