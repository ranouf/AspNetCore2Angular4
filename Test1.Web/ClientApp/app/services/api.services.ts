﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.9.3.0 (NJsonSchema v9.7.7.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { ErrorInfo } from "./../common/errorInfo";

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, Optional, OpaqueToken } from '@angular/core';
import { Http, Headers, ResponseContentType, Response, RequestOptionsArgs } from '@angular/http';

export const API_BASE_URL = new OpaqueToken('API_BASE_URL');

export class ServiceBase {

	protected transformOptions(options: any) {
		//console.log("HTTP call, options: " + JSON.stringify(options));
		
		var item = localStorage.getItem('expiration_date');
		if (item) {
			var expirationDate = new Date(item);
			if (expirationDate && expirationDate.getTime() > new Date().getTime()) {
				options.headers.append("Authorization", 'Bearer ' + localStorage.getItem('id_token'));
			}
		}

		return Promise.resolve(options);
	}

	protected transformResult(url: string, response: Response, processor: (response: Response) => any): any {
		if (response.status !== 200 && response.status !== 204) {
			var err = new ErrorInfo().parseResponseError(response);
			throw err;
		}
		else {
			return processor(response);
		}
	}
}

@Injectable()
export class SamplesService extends ServiceBase {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        super();
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    getSampleById(id: string): Observable<MySampleDto | null> {
        let url_ = this.baseUrl + "/api/v1/Samples/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return Observable.fromPromise(this.transformOptions(options_)).flatMap(transformedOptions_ => {
            return this.http.request(url_, transformedOptions_);
        }).flatMap((response_: any) => {
            return this.transformResult(url_, response_, (r) => this.processGetSampleById(r));
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processGetSampleById(r));
                } catch (e) {
                    return <Observable<MySampleDto | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<MySampleDto | null>><any>Observable.throw(response_);
        });
    }

    protected processGetSampleById(response: Response): Observable<MySampleDto | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            result200 = _responseText === "" ? null : <MySampleDto>JSON.parse(_responseText, this.jsonParseReviver);
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<MySampleDto | null>(<any>null);
    }

    deleteSample(id: string): Observable<any | null> {
        let url_ = this.baseUrl + "/api/v1/Samples/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = {
            method: "delete",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return Observable.fromPromise(this.transformOptions(options_)).flatMap(transformedOptions_ => {
            return this.http.request(url_, transformedOptions_);
        }).flatMap((response_: any) => {
            return this.transformResult(url_, response_, (r) => this.processDeleteSample(r));
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processDeleteSample(r));
                } catch (e) {
                    return <Observable<any | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<any | null>><any>Observable.throw(response_);
        });
    }

    protected processDeleteSample(response: Response): Observable<any | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            result200 = _responseText === "" ? null : <any>JSON.parse(_responseText, this.jsonParseReviver);
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<any | null>(<any>null);
    }

    getSamples(pageSize: number | null, pageIndex: number | null, sort: string | null, direction: string | null, filter: string | null): Observable<PagedResultDtoOfMySampleDto | null> {
        let url_ = this.baseUrl + "/api/v1/Samples?";
        if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&"; 
        if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&"; 
        if (sort !== undefined)
            url_ += "sort=" + encodeURIComponent("" + sort) + "&"; 
        if (direction !== undefined)
            url_ += "direction=" + encodeURIComponent("" + direction) + "&"; 
        if (filter !== undefined)
            url_ += "filter=" + encodeURIComponent("" + filter) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return Observable.fromPromise(this.transformOptions(options_)).flatMap(transformedOptions_ => {
            return this.http.request(url_, transformedOptions_);
        }).flatMap((response_: any) => {
            return this.transformResult(url_, response_, (r) => this.processGetSamples(r));
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processGetSamples(r));
                } catch (e) {
                    return <Observable<PagedResultDtoOfMySampleDto | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<PagedResultDtoOfMySampleDto | null>><any>Observable.throw(response_);
        });
    }

    protected processGetSamples(response: Response): Observable<PagedResultDtoOfMySampleDto | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            result200 = _responseText === "" ? null : <PagedResultDtoOfMySampleDto>JSON.parse(_responseText, this.jsonParseReviver);
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<PagedResultDtoOfMySampleDto | null>(<any>null);
    }

    createSample(dto: MySampleDto | null): Observable<MySampleDto | null> {
        let url_ = this.baseUrl + "/api/v1/Samples";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(dto);
        
        let options_ = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return Observable.fromPromise(this.transformOptions(options_)).flatMap(transformedOptions_ => {
            return this.http.request(url_, transformedOptions_);
        }).flatMap((response_: any) => {
            return this.transformResult(url_, response_, (r) => this.processCreateSample(r));
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processCreateSample(r));
                } catch (e) {
                    return <Observable<MySampleDto | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<MySampleDto | null>><any>Observable.throw(response_);
        });
    }

    protected processCreateSample(response: Response): Observable<MySampleDto | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            result200 = _responseText === "" ? null : <MySampleDto>JSON.parse(_responseText, this.jsonParseReviver);
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<MySampleDto | null>(<any>null);
    }

    updateSample(dto: MySampleDto | null): Observable<MySampleDto | null> {
        let url_ = this.baseUrl + "/api/v1/Samples";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(dto);
        
        let options_ = {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return Observable.fromPromise(this.transformOptions(options_)).flatMap(transformedOptions_ => {
            return this.http.request(url_, transformedOptions_);
        }).flatMap((response_: any) => {
            return this.transformResult(url_, response_, (r) => this.processUpdateSample(r));
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processUpdateSample(r));
                } catch (e) {
                    return <Observable<MySampleDto | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<MySampleDto | null>><any>Observable.throw(response_);
        });
    }

    protected processUpdateSample(response: Response): Observable<MySampleDto | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            result200 = _responseText === "" ? null : <MySampleDto>JSON.parse(_responseText, this.jsonParseReviver);
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<MySampleDto | null>(<any>null);
    }
}

@Injectable()
export class AccountService extends ServiceBase {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        super();
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    register(dto: RegistrationDto | null): Observable<any | null> {
        let url_ = this.baseUrl + "/api/v1/Account";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(dto);
        
        let options_ = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return Observable.fromPromise(this.transformOptions(options_)).flatMap(transformedOptions_ => {
            return this.http.request(url_, transformedOptions_);
        }).flatMap((response_: any) => {
            return this.transformResult(url_, response_, (r) => this.processRegister(r));
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processRegister(r));
                } catch (e) {
                    return <Observable<any | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<any | null>><any>Observable.throw(response_);
        });
    }

    protected processRegister(response: Response): Observable<any | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            result200 = _responseText === "" ? null : <any>JSON.parse(_responseText, this.jsonParseReviver);
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<any | null>(<any>null);
    }
}

@Injectable()
export class AuthenticationService extends ServiceBase {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        super();
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    login(dto: CredentialsDto | null): Observable<UserAuthenticationDto | null> {
        let url_ = this.baseUrl + "/api/v1/Authentication";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(dto);
        
        let options_ = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return Observable.fromPromise(this.transformOptions(options_)).flatMap(transformedOptions_ => {
            return this.http.request(url_, transformedOptions_);
        }).flatMap((response_: any) => {
            return this.transformResult(url_, response_, (r) => this.processLogin(r));
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processLogin(r));
                } catch (e) {
                    return <Observable<UserAuthenticationDto | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<UserAuthenticationDto | null>><any>Observable.throw(response_);
        });
    }

    protected processLogin(response: Response): Observable<UserAuthenticationDto | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            result200 = _responseText === "" ? null : <UserAuthenticationDto>JSON.parse(_responseText, this.jsonParseReviver);
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<UserAuthenticationDto | null>(<any>null);
    }

    test(): Observable<any | null> {
        let url_ = this.baseUrl + "/api/v1/Authentication";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = {
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return Observable.fromPromise(this.transformOptions(options_)).flatMap(transformedOptions_ => {
            return this.http.request(url_, transformedOptions_);
        }).flatMap((response_: any) => {
            return this.transformResult(url_, response_, (r) => this.processTest(r));
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processTest(r));
                } catch (e) {
                    return <Observable<any | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<any | null>><any>Observable.throw(response_);
        });
    }

    protected processTest(response: Response): Observable<any | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            result200 = _responseText === "" ? null : <any>JSON.parse(_responseText, this.jsonParseReviver);
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<any | null>(<any>null);
    }
}

export interface MySampleDto {
    id: string;
    value: string;
    authorFullname?: string | undefined;
    creationTime: Date;
    lastEditorFullname?: string | undefined;
    lastModificationTime?: Date | undefined;
}

export interface PagedResultDtoOfMySampleDto {
    length: number;
    items?: MySampleDto[] | undefined;
    hasNextPage: boolean;
}

export interface RegistrationDto {
    email: string;
    password: string;
    passwordConfirmation: string;
    firstname: string;
    lastname: string;
}

export interface CredentialsDto {
    email: string;
    password: string;
}

export interface UserAuthenticationDto {
    firstname?: string | undefined;
    lastname?: string | undefined;
    expirationDate: Date;
    token?: string | undefined;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return Observable.throw(result);
    else
        return Observable.throw(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => { 
        let reader = new FileReader(); 
        reader.onload = function() { 
            observer.next(this.result);
            observer.complete();
        }
        reader.readAsText(blob); 
    });
}