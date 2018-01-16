# WeWork Labs - Beta Branch Directory

This README would normally document whatever steps are necessary to get the
application up and running.

But it won't now.

Not for the faint hearted. Lots of hacky stuff to make it work asap.
Some spec coverage so there's some confidence to the API working before moving to frontned.

### Contributing

Just submit a PR.

Got feature suggestions? Open an issue.

## Quick API Docs

### Users

Users can have 1 company.

Required Fields:

* First Name
* Last Name
* Email
* Password

Optional Fields:

* Avatar
* Company

### Companies

Company can have many users and many tools.

Required Fields:

* Name
* Description

Optional Fields:

* Logo

### Tools

Tools can have many companies.

Required Fields:
* Name

Optional Fields:
* Icon

### USER RELATED

#### Login API
  Returns json data.

  **URL**

    /authenticate?email={email_ID}&password={UserPassword}

  **Method:**

    `POST`

  **Success Response:**

    * **Code:** 200 <br />
      **Content:** { auth_token: "ENCODED_AUTH_TOKEN" }

  **Error Response:**

    If username or password are incorrect:

      **Code:** 401 UNAUTHORIZED
      **Content:** { error : 'Invalid username or password' }


#### Renew AuthToken

  **URL**

    /auth/renew_token

  **Method:**

    `POST`


####    Logout
  **URL**

    /users/sign_out

  **Method:**

    `DELETE`

####    User Options for React Select
  **URL**

    /users/select_options

  **Method:**

    `GET`

####   Register

**URL**

    /users

**Method:**

    `POST`

####   Update user

**URL**

    /users/:id

**Method:**

    `PUT`


### Company Related

####   List all companies
**URL**

    /companies

**Method:**

    `GET`

#### Create New Company
**URL**

    /companiees

**Method:**

    `POST`

#### Show Company
**URL**

    /companies/:id

**Method:**

    `GET`

#### Update Company

Users can only update their own company.

**URL**

    /companies/:id

**Method:**

    `PUT`

#### Delete Company

Users can only delete their own company.

**URL**

    /companies/:id

**Method:**

    `DELETE`


### Tools Related

These are like technologies, tools etc.

#### Tool Options for React Select

**URL**

    /tools/select_options

**Method:**

    `GET`

#### Get All Tools
**URL**

    /tools

**Method:**

    `GET`

#### Create New Tool
**URL**

    /tools

**Method:**

    `POST`
