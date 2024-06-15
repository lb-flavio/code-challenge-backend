## Code Challenge :rocket:
Demonstrate your coding skills by designing and implementing a microservices system to manage phone calls via queues and ring groups.

Don't forget that the correct way to submit your work is by forking the repository and creating a PR.

### Problem
The task involves handling incoming call requests through an API Gateway. These requests should be processed either through a call queue or a ring group based on the details of the request. Each call must be logged in a database, and a message must be sent to a Queue Service that will manage the call distribution.

The call management is differentiated as follows:

- Queue: A single interpreter handles the call.
- Ring Group: All interpreters in a group receive the call notification.

Here is how the flow should be managed:

``` mermaid
    flowchart TD
        APIGateway -- "Receive Call Request" --> CallService
        CallService -- "Log call in DB" --> Database[(Database)]
        CallService -- "Determine call handling" --> QueueService
        QueueService -- "Notify interpreters" --> NotificationService
        NotificationService --"Incoming Call"--> Interpreters
```

### Requirements
- Permitted Languages: You may use any programming language you consider appropriate for the task (Node.js, Python, Java, etc.).
- Database: You are free to choose any database.
- Messaging: You must use Kafka as the messaging system.
- APIs: You must provide a REST or GraphQL API to interact with the microservice.


### Example DTOs
Call Request DTO:
```
{
  "from": "123456789",
  "to": "987654321",
  "language": "es",
  "callType": "queue" // Possible values: "queue", "ring_group"
}
```

Call Response DTO:
```
{
  "callId": "abc123",
  "callStatus": "ringing" // Possible statuses: "ringing", "rejected", "accepted"
}
```

### Considerations
Consider scenarios of high concurrency where there may be a high volume of calls being processed simultaneously. How would you design the system to efficiently handle these scenarios?

### Submission Instructions
- Fork this repository.
- Complete the challenge in your fork.
- Submit a pull request to the original repository with your changes.
- Make sure to include detailed instructions on how to run your project, including any steps needed to set up the environment, dependencies, and the database.

### Evaluation
The system design, code quality, use of software development practices, documentation, and the efficiency of queue will be evaluated, especially in scenarios of high concurrency.
