﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.7.2.0 (NJsonSchema v9.6.3.0) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

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
		console.log("HTTP call, options: " + JSON.stringify(options));

		options.headers.append("myheader", "myvalue");
		return Promise.resolve(options);
	}

	protected transformResult(url: string, response: any, processor: (response: any) => any) {
		if (response.status !== 200 && response.status !== 204) {
			//TODO Manage Error
		}
		else {
			return processor(response);
		}
	}
}

@Injectable()
export class Service extends ServiceBase {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        super();
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    getSampleById(id: string): Observable<MySampleDto | null> {
        let url_ = this.baseUrl + "/api/v1/Sample/{id}";
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
        }).flatMap((response_) => {
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

    getSamples(): Observable<MySampleDto[] | null> {
        let url_ = this.baseUrl + "/api/v1/Sample";
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
        }).flatMap((response_) => {
            return this.transformResult(url_, response_, (r) => this.processGetSamples(r));
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processGetSamples(r));
                } catch (e) {
                    return <Observable<MySampleDto[] | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<MySampleDto[] | null>><any>Observable.throw(response_);
        });
    }

    protected processGetSamples(response: Response): Observable<MySampleDto[] | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            result200 = _responseText === "" ? null : <MySampleDto[]>JSON.parse(_responseText, this.jsonParseReviver);
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<MySampleDto[] | null>(<any>null);
    }

    createSample(dto: MySampleDto | null): Observable<MySampleDto[] | null> {
        let url_ = this.baseUrl + "/api/v1/Sample";
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
        }).flatMap((response_) => {
            return this.transformResult(url_, response_, (r) => this.processCreateSample(r));
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processCreateSample(r));
                } catch (e) {
                    return <Observable<MySampleDto[] | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<MySampleDto[] | null>><any>Observable.throw(response_);
        });
    }

    protected processCreateSample(response: Response): Observable<MySampleDto[] | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            result200 = _responseText === "" ? null : <MySampleDto[]>JSON.parse(_responseText, this.jsonParseReviver);
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<MySampleDto[] | null>(<any>null);
    }

    updateSample(dto: MySampleDto | null): Observable<MySampleDto[] | null> {
        let url_ = this.baseUrl + "/api/v1/Sample";
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
        }).flatMap((response_) => {
            return this.transformResult(url_, response_, (r) => this.processUpdateSample(r));
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processUpdateSample(r));
                } catch (e) {
                    return <Observable<MySampleDto[] | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<MySampleDto[] | null>><any>Observable.throw(response_);
        });
    }

    protected processUpdateSample(response: Response): Observable<MySampleDto[] | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            result200 = _responseText === "" ? null : <MySampleDto[]>JSON.parse(_responseText, this.jsonParseReviver);
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<MySampleDto[] | null>(<any>null);
    }

    getTestById(id: string): Observable<MySampleDto | null> {
        let url_ = this.baseUrl + "/api/v1/Test/{id}";
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
        }).flatMap((response_) => {
            return this.transformResult(url_, response_, (r) => this.processGetTestById(r));
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processGetTestById(r));
                } catch (e) {
                    return <Observable<MySampleDto | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<MySampleDto | null>><any>Observable.throw(response_);
        });
    }

    protected processGetTestById(response: Response): Observable<MySampleDto | null> {
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

    getTestes(): Observable<MySampleDto[] | null> {
        let url_ = this.baseUrl + "/api/v1/Test";
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
        }).flatMap((response_) => {
            return this.transformResult(url_, response_, (r) => this.processGetTestes(r));
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processGetTestes(r));
                } catch (e) {
                    return <Observable<MySampleDto[] | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<MySampleDto[] | null>><any>Observable.throw(response_);
        });
    }

    protected processGetTestes(response: Response): Observable<MySampleDto[] | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            result200 = _responseText === "" ? null : <MySampleDto[]>JSON.parse(_responseText, this.jsonParseReviver);
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<MySampleDto[] | null>(<any>null);
    }

    createTest(dto: MySampleDto | null): Observable<MySampleDto[] | null> {
        let url_ = this.baseUrl + "/api/v1/Test";
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
        }).flatMap((response_) => {
            return this.transformResult(url_, response_, (r) => this.processCreateTest(r));
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processCreateTest(r));
                } catch (e) {
                    return <Observable<MySampleDto[] | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<MySampleDto[] | null>><any>Observable.throw(response_);
        });
    }

    protected processCreateTest(response: Response): Observable<MySampleDto[] | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            result200 = _responseText === "" ? null : <MySampleDto[]>JSON.parse(_responseText, this.jsonParseReviver);
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<MySampleDto[] | null>(<any>null);
    }

    updateTest(dto: MySampleDto | null): Observable<MySampleDto[] | null> {
        let url_ = this.baseUrl + "/api/v1/Test";
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
        }).flatMap((response_) => {
            return this.transformResult(url_, response_, (r) => this.processUpdateTest(r));
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.transformResult(url_, response_, (r) => this.processUpdateTest(r));
                } catch (e) {
                    return <Observable<MySampleDto[] | null>><any>Observable.throw(e);
                }
            } else
                return <Observable<MySampleDto[] | null>><any>Observable.throw(response_);
        });
    }

    protected processUpdateTest(response: Response): Observable<MySampleDto[] | null> {
        const status = response.status; 

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            result200 = _responseText === "" ? null : <MySampleDto[]>JSON.parse(_responseText, this.jsonParseReviver);
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<MySampleDto[] | null>(<any>null);
    }
}

export interface MySampleDto {
    Id: string;
    Value: string;
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