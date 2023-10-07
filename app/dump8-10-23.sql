--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--





--
-- Drop roles
--

DROP ROLE postgres;


--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:Ux+ZEL1qQKwmcy0gF1UHVg==$xLzoncUoZYPJs5IALsxYVoQW2e2zyBfwYtMDVsM2XfQ=:1HPkC5XCaQ/UrotSxn9G7x+FxkbOXm00xAE0Hi6Ifs0=';

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Debian 15.3-1.pgdg120+1)
-- Dumped by pg_dump version 15.3 (Debian 15.3-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO postgres;

\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: postgres
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: postgres
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Debian 15.3-1.pgdg120+1)
-- Dumped by pg_dump version 15.3 (Debian 15.3-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Movement; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Movement" (
    "Name" text NOT NULL,
    "Function" text,
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL
);


ALTER TABLE public."Movement" OWNER TO postgres;

--
-- Name: Program; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Program" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "nameId" uuid,
    program text NOT NULL,
    "creatorFName" text,
    "creatorLName" text
);


ALTER TABLE public."Program" OWNER TO postgres;

--
-- Name: WorkingSet; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."WorkingSet" (
    "workoutType" uuid NOT NULL,
    "workoutName" text,
    sets smallint,
    reps smallint,
    weight integer,
    notes text,
    "personalRecordAttempt" integer,
    split1 integer,
    split2 integer,
    "split1Notes" text,
    "split2Notes" text,
    "resultsDistance" integer,
    "resultsCalories" integer,
    "movementId" uuid,
    "workoutId" uuid,
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "multiSplitBool" boolean NOT NULL,
    "multiSplitJSON" jsonb
);


ALTER TABLE public."WorkingSet" OWNER TO postgres;

--
-- Name: Workout; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Workout" (
    "workoutType" uuid NOT NULL,
    "workoutLocation" uuid NOT NULL,
    "workoutName" text,
    "restWeek" boolean,
    "restDay" boolean,
    "physicalRating" integer,
    "mentalRating" integer,
    "sleepRating" integer,
    injury boolean,
    "injuryComments" text,
    "overallComments" text,
    "workoutTime" timestamp without time zone,
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL
);


ALTER TABLE public."Workout" OWNER TO postgres;

--
-- Name: WorkoutType; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."WorkoutType" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "Name" text NOT NULL,
    "CreatorId" uuid
);


ALTER TABLE public."WorkoutType" OWNER TO postgres;

--
-- Data for Name: Movement; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Movement" ("Name", "Function", id) FROM stdin;
Assault Bike	Cardio	fb5ecf89-a5a8-49f2-9d8c-1a46290faad0
Echo Bike	Cardio	d2403492-028a-45f8-b2f4-a8e5ddf7ee7b
Concept2 Rower	Cardio	fd231d5d-2abf-4ced-852e-38da18776d7e
Bike Erg	Cardio	dda8fa7c-f651-49e3-841c-b293d04b7d7f
Concept2 Ski Erg	Cardio	34a463e4-9592-4224-a36f-268a655a4955
Running	Cardio	79021713-f5c5-42a8-91c8-d701fad1bbf7
Squat Clean	Weightlifting	4eccf836-50d8-4d3f-8025-bd3d1d929d47
Air Squat	Functional Fitness	6a64698b-6bfe-41cb-842a-119889bb72bd
Devil Press	Functional Fitness	7fa6a64e-7ba1-48f3-ba55-6fbb2884b6a1
Pullup	Functional Fitness	2e5b2c99-8da1-4a35-a24b-55e4d3d9c021
Pushup	Functional Fitness	ce6be58d-f120-4a30-930f-64ac6772ed7f
Wall Walk	Functional Fitness	b5919699-efc1-43a0-9081-26a8772af1ae
\.


--
-- Data for Name: Program; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Program" (id, "nameId", program, "creatorFName", "creatorLName") FROM stdin;
4f814730-f01e-49c0-8898-ca105eaad93c	\N	Invictus 3 Day Weightlifting	\N	\N
1e0c9a0d-53e7-41c7-8223-d9955106e6c5	\N	Year of the Engine	\N	\N
f0459fc3-0895-47d5-9ba3-7e6625a1c38b	\N	Crossfit	Dave	Coburn
99938af2-9ef0-448a-ad3f-9166de89df6f	\N	Crossfit	Zach	Miller
52bfd9c9-5f3c-475b-bae7-2df4f6af000f	\N	Crossfit	Jared	Bruce
7ee4d1f9-1ef5-446e-b7ac-643d63f3d4a3	\N	Crossfit	Nikki	Pierce
\.


--
-- Data for Name: WorkingSet; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."WorkingSet" ("workoutType", "workoutName", sets, reps, weight, notes, "personalRecordAttempt", split1, split2, "split1Notes", "split2Notes", "resultsDistance", "resultsCalories", "movementId", "workoutId", id, "multiSplitBool", "multiSplitJSON") FROM stdin;
\.


--
-- Data for Name: Workout; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Workout" ("workoutType", "workoutLocation", "workoutName", "restWeek", "restDay", "physicalRating", "mentalRating", "sleepRating", injury, "injuryComments", "overallComments", "workoutTime", id) FROM stdin;
\.


--
-- Data for Name: WorkoutType; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."WorkoutType" (id, "Name", "CreatorId") FROM stdin;
0c5b2317-c46c-4018-8c7f-f8697b548db9	Crossfit	\N
\.


--
-- Name: WorkingSet WorkingSet_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WorkingSet"
    ADD CONSTRAINT "WorkingSet_pkey" PRIMARY KEY (id);


--
-- Name: WorkoutType WorkoutType_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WorkoutType"
    ADD CONSTRAINT "WorkoutType_id" PRIMARY KEY (id);


--
-- Name: Movement WorkoutType_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Movement"
    ADD CONSTRAINT "WorkoutType_pkey" PRIMARY KEY (id);


--
-- Name: Workout Workout_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Workout"
    ADD CONSTRAINT "Workout_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

