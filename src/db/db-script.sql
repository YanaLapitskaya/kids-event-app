--
-- PostgreSQL database dump
--

-- Dumped from database version 10.2
-- Dumped by pg_dump version 10.1

-- Started on 2018-03-05 16:56:48

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 202 (class 1259 OID 24625)
-- Name: Client; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Client" (
    id integer NOT NULL,
    name name,
    phone bigint,
    social_networks character(1)[],
    notes text
);


ALTER TABLE "Client" OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 24628)
-- Name: Client_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Client_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Client_id_seq" OWNER TO postgres;

--
-- TOC entry 2853 (class 0 OID 0)
-- Dependencies: 203
-- Name: Client_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Client_id_seq" OWNED BY "Client".id;


--
-- TOC entry 196 (class 1259 OID 24577)
-- Name: Employee; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Employee" (
    id integer NOT NULL,
    first_name name,
    last_name name,
    description text,
    phone bigint,
    email character(30),
    "position" character(30),
    photo text
);


ALTER TABLE "Employee" OWNER TO postgres;

--
-- TOC entry 2854 (class 0 OID 0)
-- Dependencies: 196
-- Name: TABLE "Employee"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE "Employee" IS 'table with company''s employees';


--
-- TOC entry 197 (class 1259 OID 24580)
-- Name: Employee_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Employee_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Employee_id_seq" OWNER TO postgres;

--
-- TOC entry 2855 (class 0 OID 0)
-- Dependencies: 197
-- Name: Employee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Employee_id_seq" OWNED BY "Employee".id;


--
-- TOC entry 204 (class 1259 OID 24639)
-- Name: Order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Order" (
    client_id integer,
    id integer NOT NULL,
    date date,
    price money,
    comments text,
    services_id integer[]
);


ALTER TABLE "Order" OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 24642)
-- Name: Order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Order_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Order_id_seq" OWNER TO postgres;

--
-- TOC entry 2856 (class 0 OID 0)
-- Dependencies: 205
-- Name: Order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Order_id_seq" OWNED BY "Order".id;


--
-- TOC entry 198 (class 1259 OID 24597)
-- Name: Review; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Review" (
    id integer NOT NULL,
    name name,
    text text
);


ALTER TABLE "Review" OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 24600)
-- Name: Review_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Review_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Review_id_seq" OWNER TO postgres;

--
-- TOC entry 2857 (class 0 OID 0)
-- Dependencies: 199
-- Name: Review_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Review_id_seq" OWNED BY "Review".id;


--
-- TOC entry 200 (class 1259 OID 24611)
-- Name: Service; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Service" (
    id integer NOT NULL,
    photos text[],
    title character(50),
    description text,
    price money
);


ALTER TABLE "Service" OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 24614)
-- Name: Service_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Service_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Service_id_seq" OWNER TO postgres;

--
-- TOC entry 2858 (class 0 OID 0)
-- Dependencies: 201
-- Name: Service_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Service_id_seq" OWNED BY "Service".id;


--
-- TOC entry 2702 (class 2604 OID 24630)
-- Name: Client id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Client" ALTER COLUMN id SET DEFAULT nextval('"Client_id_seq"'::regclass);


--
-- TOC entry 2699 (class 2604 OID 24582)
-- Name: Employee id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Employee" ALTER COLUMN id SET DEFAULT nextval('"Employee_id_seq"'::regclass);


--
-- TOC entry 2703 (class 2604 OID 24644)
-- Name: Order id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Order" ALTER COLUMN id SET DEFAULT nextval('"Order_id_seq"'::regclass);


--
-- TOC entry 2700 (class 2604 OID 24602)
-- Name: Review id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Review" ALTER COLUMN id SET DEFAULT nextval('"Review_id_seq"'::regclass);


--
-- TOC entry 2701 (class 2604 OID 24616)
-- Name: Service id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Service" ALTER COLUMN id SET DEFAULT nextval('"Service_id_seq"'::regclass);


--
-- TOC entry 2844 (class 0 OID 24625)
-- Dependencies: 202
-- Data for Name: Client; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Client" (id, name, phone, social_networks, notes) FROM stdin;
1	Николай	331769783	\N	\N
2	Алена	449782432	\N	\N
3	Яна	442542432	\N	\N
\.


--
-- TOC entry 2838 (class 0 OID 24577)
-- Dependencies: 196
-- Data for Name: Employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Employee" (id, first_name, last_name, description, phone, email, "position", photo) FROM stdin;
2	Яна	Лапицкая	Люблю программировать	445552659	yanalapitskay@gmail.com       	developer                     	\N
1	Елена	Вороная	Люблю детей, продукцию Apple и Стасика	291357999	\N	manager                       	\N
\.


--
-- TOC entry 2846 (class 0 OID 24639)
-- Dependencies: 204
-- Data for Name: Order; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Order" (client_id, id, date, price, comments, services_id) FROM stdin;
1	1	2018-03-30	60,00 Br	4 ребенка	{1}
\.


--
-- TOC entry 2840 (class 0 OID 24597)
-- Dependencies: 198
-- Data for Name: Review; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Review" (id, name, text) FROM stdin;
1	Алёна	Брали программу "приключения маленького поняши". Все очень понравилось!
2	Николай	Хорошая программа. Красивые и веселые аниматоры. Нравки, нравки
3	Данила	Прекрасный способ занять детей на 2 часа!
\.


--
-- TOC entry 2842 (class 0 OID 24611)
-- Dependencies: 200
-- Data for Name: Service; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Service" (id, photos, title, description, price) FROM stdin;
1	\N	Путешествие в страну пупырок                      	Увлекательное и незабываемое погружение детей в мир пупырок! :)	\N
\.


--
-- TOC entry 2859 (class 0 OID 0)
-- Dependencies: 203
-- Name: Client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Client_id_seq"', 3, true);


--
-- TOC entry 2860 (class 0 OID 0)
-- Dependencies: 197
-- Name: Employee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Employee_id_seq"', 2, true);


--
-- TOC entry 2861 (class 0 OID 0)
-- Dependencies: 205
-- Name: Order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Order_id_seq"', 1, true);


--
-- TOC entry 2862 (class 0 OID 0)
-- Dependencies: 199
-- Name: Review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Review_id_seq"', 3, true);


--
-- TOC entry 2863 (class 0 OID 0)
-- Dependencies: 201
-- Name: Service_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Service_id_seq"', 1, true);


--
-- TOC entry 2711 (class 2606 OID 24638)
-- Name: Client client_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Client"
    ADD CONSTRAINT client_pkey PRIMARY KEY (id);


--
-- TOC entry 2705 (class 2606 OID 24596)
-- Name: Employee empl_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Employee"
    ADD CONSTRAINT empl_pkey PRIMARY KEY (id);


--
-- TOC entry 2714 (class 2606 OID 24674)
-- Name: Order order_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);


--
-- TOC entry 2707 (class 2606 OID 24607)
-- Name: Review review_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Review"
    ADD CONSTRAINT review_pkey PRIMARY KEY (id);


--
-- TOC entry 2709 (class 2606 OID 24621)
-- Name: Service service_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Service"
    ADD CONSTRAINT service_pkey PRIMARY KEY (id);


--
-- TOC entry 2712 (class 1259 OID 24656)
-- Name: fki_client_order; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_client_order ON "Order" USING btree (client_id);


--
-- TOC entry 2715 (class 2606 OID 24651)
-- Name: Order client_order_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Order"
    ADD CONSTRAINT client_order_fk FOREIGN KEY (client_id) REFERENCES "Client"(id);


--
-- TOC entry 2716 (class 2606 OID 24668)
-- Name: Order service_order_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Order"
    ADD CONSTRAINT service_order_fk FOREIGN KEY (client_id) REFERENCES "Service"(id);


-- Completed on 2018-03-05 16:56:50

--
-- PostgreSQL database dump complete
--

